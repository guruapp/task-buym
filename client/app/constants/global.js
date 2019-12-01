const LANGUAGE_DIRECTION = "rtl";

const REGEX_INPUT_TEXT = '^[a-zA-Z0-9\u0590-\u05fe ]+$';

const TOAST_OPTIONS = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
    "rtl": LANGUAGE_DIRECTION == "rtl"
}

export {
    LANGUAGE_DIRECTION,
    REGEX_INPUT_TEXT,
    TOAST_OPTIONS
}