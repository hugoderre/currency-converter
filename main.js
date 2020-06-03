(function($) {
    $(document).ready(function() {

        let userEntry = $('#cc_container-main > input');
        let resultElement = $('#cc_result');
        let resultValue, toConvert = "";
        let rate = $("#cc_rate-choice").val();
        $("#cc_rate-choice").change(function() {
            rate = $(this).val();
        })

        $.ajax({
            url: "http://data.fixer.io/api/latest?access_key=7a5e2ff851f21c5da63515b4070c0d54",
            success: function(result) {
                userEntry.keydown(function(e) {
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
                    if (e.keyCode === 8 || e.keyCode === 46) {
                        resultElement.text('');
                        userEntry.val('');
                        resultValue = "";
                        toConvert = "";
                    }
                })
                for (const property in result.rates) {
                    let opt = document.createElement('option');
                    opt.value = property;
                    opt.text = property;
                    $('#cc_rate-choice').append(opt);

                }
            }
        });

        function convert(toConvert, rate) {
            resultValue = toConvert * rate;
            resultElement.text(resultValue.toFixed(2));
        }

        $("input[type=number]").on("focus", function() {
            $(this).on("keydown", function(event) {
                if (event.keyCode === 38 || event.keyCode === 40) {
                    event.preventDefault();
                }
            });
        });

    })
})(jQuery);