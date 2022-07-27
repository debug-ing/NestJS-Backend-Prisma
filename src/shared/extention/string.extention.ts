interface String {
  persian2English(pre: string): string;
}

String.prototype.persian2English = function () {
  return this.replace(/[۰-۹]/g, function (chr) {
    var persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return persian.indexOf(chr);
  });
};
