import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import PageTitle from "../../components/PageTitle";

const initialValues ={
    firstName: "",
    lastName: "",
    email: "",
    // contact: "",
    address1: "",
    address2: ""
}

// use RegExp to detect what the number received from the data actually is
// const phoneRegExp = /^((\+[1-9]{1,4}[-]?)|(\([0-9]{2,3}\)[-]?)\([0-9]{2,4})[-]?)*?[0-9]{3,4}[-]?[0-9]{3,4}$/

const userSchema = yup.object().shape({ //yup provides premade validation function
    firstName: yup.string().required("required"), // error messages will pop-up if requirement are unmet
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Email").required("required"),
    // contact: yup.string().matches(phoneRegExp, "Phone number is invalid").required("required"), //check for 2 requirements
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
});

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)"); //
    const handleFormSubmit = (values) => {
    console.log(values);
    };

    return (<Box m="20px">
        <PageTitle title="CREATE USER" subtitle="Create a New User Profile" />

        <Formik 
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Box 
                        display="grid" 
                        gap="30px"  
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        /* split the grid into 4 sections, 0 to 1 fraction (unit for each grid sections) */
                        sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 4"}}} 
                    >
                        <TextField 
                            fullWidth 
                            variant="filled" 
                            type="text" 
                            label="First Name" 
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName" //must align with the column name on top
                            error={!!touched.firstName && !!errors.firstName} //error may only occur if both of these booleans are true
                            helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: "span 2"}}
                        />
                        <TextField 
                            fullWidth 
                            variant="filled" 
                            type="text" 
                            label="Last Name" 
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            name="lastName" //must align with the column name on top
                            error={!!touched.lastName && !!errors.lastName} //error may only occur if both of these booleans are true
                            helperText={touched.lastName && errors.lastName}
                            sx={{ gridColumn: "span 2"}}
                        />
                        <TextField 
                            fullWidth 
                            variant="filled" 
                            type="text" 
                            label="Email" 
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email" //must align with the column name on top
                            error={!!touched.email && !!errors.email} //error may only occur if both of these booleans are true
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 4"}}
                        />
                        {/* <TextField 
                            fullWidth 
                            variant="filled" 
                            type="text" 
                            label="Contact Number" 
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.contact}
                            name="contact" //must align with the column name on top
                            error={!!touched.contact && !!errors.contact} //error may only occur if both of these booleans are true
                            helperText={touched.contact && errors.contact}
                            sx={{ gridColumn: "span 4"}}
                        /> */}
                        <TextField 
                            fullWidth 
                            variant="filled" 
                            type="text" 
                            label="Address 1" 
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address1}
                            name="address1" //must align with the column name on top
                            error={!!touched.address1 && !!errors.address1} //error may only occur if both of these booleans are true
                            helperText={touched.address1 && errors.address1}
                            sx={{ gridColumn: "span 4"}}
                        />
                        <TextField 
                            fullWidth 
                            variant="filled" 
                            type="text" 
                            label="Address 2" 
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address2}
                            name="address2" //must align with the column name on top
                            error={!!touched.address2 && !!errors.address2} //error may only occur if both of these booleans are true
                            helperText={touched.address2 && errors.address2}
                            sx={{ gridColumn: "span 4" }}
                        />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" varaint="contained">
                            Create New User
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    </Box>)
}

export default Form;