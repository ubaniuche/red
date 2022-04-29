// import {check, body, query} from 'express-validator'

// export default class CommonValidators {

// // - serial number (100 characters max);
// // - model (Lightweight, Middleweight, Cruiserweight, Heavyweight);
// // - weight limit (500gr max);
// // - battery capacity (percentage);
// // - state (IDLE, LOADING, LOADED, DELIVERING, DELIVERED, RETURNING).

//     static checkNameString(item) {
//         return this.inputCheck(item)
//             .isString()
//             .withMessage(`${item} value must be a string`)
//             .matches(/^[A-Za-z0-9 -_]+$/)
//             .withMessage(`${item} value can only contain letters, numbers and "_", "-"`)
//             .customSanitizer((value) => this.makeLowerCase(value));
//     }

//     static checkCodeString(item) {
//         return this.inputCheck(item)
//             .isString()
//             .withMessage(`${item} value must be a string`)
//             .matches(/^[A-Z0-9 _]+$/)
//             .withMessage(`${item} value can only contain capital letters, numbers and "_"`)
//     }

//     static checkNumber(item) {
//         return this.genericCheck(item)
//             .trim()
//             .isInt({ min: 1 })
//             .withMessage(`${item} value must be at least 1 and an integer`);
//     }

//     static checkStringOptional(item) {
//         return this.inputCheck(item)
//             .isString()
//             .withMessage(`${item} value must be a string`)
//             .customSanitizer((value) => this.makeLowerCase(value));
//     }

//     static checkString(item) {
//         return this.genericCheck(item)
//             .trim()
//             .isString()
//             .withMessage(`${item} value must be a string`)
//             .customSanitizer((value) => this.makeLowerCase(value));
//     }

//     static inputCheck(field) {
//         return check(field)
//             .optional()
//             .trim()
//             .not()
//             .isEmpty({ ignore_whitespace: true });
//     }

//     static genericCheck(field) {
//         return check(field)
//             .exists()
//             .withMessage(`${field} is missing`)
//             .not()
//             .isEmpty({ ignore_whitespace: true })
//             .withMessage(`${field} cannot be blank`);
//     }

//     static makeLowerCase(value) {
        
//         if (value !== "") return value.toLowerCase();
        
//         return value;
//     }
// }