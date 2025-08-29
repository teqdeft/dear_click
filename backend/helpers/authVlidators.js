
const otpValidation = {
    contact: {
        optional: true,
        notEmpty: {
            errorMessage: "Please enter your phone number",
        },
        isMobilePhone: {
            errorMessage: "Please enter a valid phone number",
        },
    },
    email: {
        optional: true,
        notEmpty: {
            errorMessage: "Please enter your email",
        },
        isEmail: {
            errorMessage: "Please enter a valid email address",
        },
    },

}

const authValidation = {
    password: {
        notEmpty: {
            errorMessage: "Password is required",
        },
        isStrongPassword: {
            options: {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
            },
            errorMessage:
                "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
        },
    },
};


// username: {
//     optional: true,
//     notEmpty: {
//         errorMessage: "Username is required",
//     }
// },


// new_password: {
//         isStrongPassword: {
//             optional: true,
//             minLength: 8,
//             minLowercase: 1,
//             minUppercase: 1,
//             minNumbers: 1,
//         },
//         errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"
//     },

module.exports = { authValidation, otpValidation } 
