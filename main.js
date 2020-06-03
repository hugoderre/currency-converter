(function($) {
    $(document).ready(function() {

        const userEntry = $('#cc_container-main > input');
        const resultElement = $('#cc_result');
        let resultValue, toConvert = "";


        // Ajax call to get rates / currencies
        $.ajax({
            url: "http://data.fixer.io/api/latest?access_key=7a5e2ff851f21c5da63515b4070c0d54",
            success: function(result) {
                // Get all property from JSON result (rates) then inject them in select element
                for (const property in result.rates) {
                    const opt = document.createElement('option');
                    opt.value = property;
                    opt.text = property;
                    $('#cc_rate-choice').append(opt);

                }
                // Get the select current value
                let rate = $("#cc_rate-choice").val();
                $("#cc_rate-choice").change(function() {
                    rate = $(this).val();
                })

                userEntry.keydown(function(e) {
                    // Includes only numbers and specials chars as values
                    if (Number.isInteger(parseInt(e.key)) || e.key === '.' || e.key === ',') {
                        if (e.key === ',') {
                            e.key = '.';
                        }
                        toConvert += e.key;
                        convert(toConvert, result.rates[rate])
                        $("#cc_rate-choice").change(function() {
                            convert(toConvert, result.rates[rate])
                        })
                    }
                    // Delete all values on press 'backspace' / 'delete'
                    if (e.keyCode === 8 || e.keyCode === 46) {
                        resultElement.text('');
                        userEntry.val('');
                        resultValue = "";
                        toConvert = "";
                    }
                })
            }
        });

        // Convert values then inject the result in the DOM
        function convert(toConvert, rate) {
            resultValue = toConvert * rate;
            resultElement.text(resultValue.toFixed(2));
        }

        // Disable the input increment (arrows) on focus
        $("input[type=number]").on("focus", function() {
            $(this).on("keydown", function(event) {
                if (event.keyCode === 38 || event.keyCode === 40) {
                    event.preventDefault();
                }
            });
        });

    })
})(jQuery);