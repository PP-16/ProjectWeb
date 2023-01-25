import * as yup from 'yup';

export const ValidateContact = yup.object({
    name : yup.string().required("pls enter your name"),
});
