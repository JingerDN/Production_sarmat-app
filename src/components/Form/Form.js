import React,{useState} from "react";
import {Formik,Form,Field,ErrorMessage} from "formik";
import axios from "axios";
import * as Yup from "yup";
import "./Form.css";

import TextError from "../pages/TextError";


const initialValues={
    subject:"Rate request",
    email:"",
    text:{
        transportationType:"",
        placeOfOrigin:"",
        portOfLoading:"",
        portOfDischarge:"",
        placeOfDelivery:"",
        commodity:"",
        cargoWeight:"",
        cargoDimensions:"",
        codeHazardousCargo:"",
        remarks:"",
    },   
}


const validationSchema=Yup.object({
    email: Yup.string().email("Invalid email format")
    .required("Required"),
    text: Yup.object().shape({
        transportationType:Yup.string().required("Required"),
        portOfLoading: Yup.string().required("Required"),
        portOfDischarge: Yup.string().required("Required"),
        commodity: Yup.string().required("Required"),
        cargoWeight: Yup.string().required("Required!")
    })
})
const transportationOptions=[
    {key:"Select an option",value:""},
    {key:"Airfreight",value:"Airfreight"},
    {key:"Seafreight FCL",value:"Seafreight FCL"},
    {key:"Seafreight LCL",value:"Seafreight LCL"},
    {key:"Road transport FTL",value:"Road transport FTL"},
    {key:"Road transport LTL",value:"Road transport LTL"},
];

function RateRaquestForm(){

    const [serverState, setServerState] = useState();
    console.log(serverState);

    const handleServerResponse = (ok, msg) => {
        setServerState({ok, msg});
      };
    
    const onSubmit=(values,onSubmitProps)=>{

        console.log("Form data",values);
        console.log("onSubmittingProps",onSubmitProps);
        
        axios({
            method: "POST",
            url: "http://localhost:5000/email",
            data: values
            
          })
          
          .then(response => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            handleServerResponse(true, "Thanks!");
            console.log(response);
          })
          .catch(error => {
            onSubmitProps.setSubmitting(false);
            handleServerResponse(false, error.response.data.error);
            console.log("Error has occured");
          });
    
    }

    
  
return(
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit} >
        {(formik)=>{
            console.log("Formik props",formik);
           // console.log(formik.errors);
            return(
                
                <Form className="form-request">
                 <div className="field-wrapper">
                <label htmlFor="email">Your e-mail adress for our feedback</label>
                <div>
                <Field 
                className="input"
                 placeholder="My answer"
                 type="text" 
                 id="email" 
                 name="email" 
                 />
                 </div>
                 <ErrorMessage name="email" component={TextError}/>
                 </div>
                
                
    
                <div className="field-wrapper"><label htmlFor="transportationType">Type for transportation</label>
                <div>
                <Field  as="select" className="select input" name="text.transportationType" id="transportationType">
                   {   transportationOptions.map((transport,index)=>(
                                <option key={transport.key} value={transport.value} id={transport.value}>{transport.key}</option>
                            ))}
                </Field>
                </div>
                <ErrorMessage name="text.transportationType" component={TextError}/></div>

    
                <div className="field-wrapper">
                <label htmlFor="placeOfOrigin">Place of origin (for EXW/FCA)</label>
                <div>
                <Field 
                className="input"
                placeholder="My answer" 
                type="text" 
                id="placeOfOrigin" 
                name="text.placeOfOrigin" 
               />
                </div></div>
                
                
                <div className="field-wrapper">
                <label htmlFor="portOfLoading">Port of loading</label>
                <div>
                <Field 
                className="input"
                placeholder="My answer" 
                type="text" 
                id="portOfLoading" 
                name="text.portOfLoading" 
                />
                </div>
               <ErrorMessage name="text.portOfLoading" component={TextError}/></div>
    
               <div className="field-wrapper">
                <label htmlFor="portOfDischarge">Port of discharge</label>
                <div>
                <Field 
                className="input"
                placeholder="My answer" 
                type="text" 
                id="portOfDischarge" 
                name="text.portOfDischarge" 
                />
                </div>
                <ErrorMessage name="text.portOfDischarge" component={TextError}/></div>
    
                <div className="field-wrapper">
                <label htmlFor="placeOfDelivery">Place of delivery (for DAP/DDP)</label>
                <div>
                <Field 
                className="input"
                placeholder="My answer" 
                type="text" 
                id="placeOfDelivery" 
                name="text.placeOfDelivery"/>
                </div></div>

    
                <div className="field-wrapper">
                <label htmlFor="commodity">Commodity</label>
                <div>
                <Field 
                className="input"
                placeholder="My answer" 
                type="text" 
                id="commodity" 
                name="text.commodity" 
                />
                </div>
                <ErrorMessage name="text.commodity" component={TextError}/></div>
    
                <div className="field-wrapper">
                <label htmlFor="cargoWeight">Cargo weight </label>
                <div>
                <Field 
                className="input"
                placeholder="My answer" 
                type="text" 
                id="cargoWeight" 
                name="text.cargoWeight" 
                />
                </div>
                <ErrorMessage name="text.cargoWeight" component={TextError}/></div>
    
                <div className="field-wrapper">
                <label htmlFor="cargoDimensions">Cargo dimensions (for airfreight/LCL/LTL)</label>
                <div>
                <Field
                className="input"
                placeholder="My answer" 
                type="text" 
                id="cargoDimensions" 
                name="text.cargoDimensions"/>
                </div></div>
    
                <div className="field-wrapper">
                <label htmlFor="codeHazardousCargo">IMO/ADR/UN code (for hazardous cargo)</label>
                <div>
                <Field 
                className="input"
                placeholder="My answer" 
                type="text" 
                id="codeHazardousCargo" 
                name="text.codeHazardousCargo"/>
                </div></div>
    
                <div className="field-wrapper">
                <label htmlFor="remarks">Remarks</label>
                <div>
                <Field 
                className="input"
                as="textarea"
                placeholder="My answer" 
                type="text" 
                id="remarks" 
                name="text.remarks" 
                />
                </div></div>
                <div>
                <button className="submit-btn" disabled={!formik.isValid || formik.isSubmitting} type="submit">Submit</button>
                </div>
            </Form>
            )
        }}
       
    </Formik>
)
}
export default RateRaquestForm;
