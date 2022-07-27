import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'PhoneNumberValidation', async: false })
export class PhoneNumberValidation implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    text = this.convertPersianNumberToEnglishNumber(text);
    return true;
  }

  convertPersianNumberToEnglishNumber(text: string) {
    return text.replace(/[\u0600-\u06FF]/g, (match) => {
      return String.fromCharCode(match.charCodeAt(0) - 0x0660);
    });
  }
  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Text ($value) is too short or too long!';
  }
}
