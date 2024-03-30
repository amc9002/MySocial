import { Field } from "react-final-form";
import s from './FieldControls.module.css'


const FieldCreator = ({input, meta, child, ...props}) => {
  return (
    <Field name={props.name}>
      {({ input, meta }) => {
        const hasError = meta.error && meta.touched;
        return (
          <div className={s.fieldCreator + " " + (hasError ? s.error : "")}>
            {props.children}
            <div className={s.errorMsg}>
              {hasError && <div>{meta.error}</div>}
            </div>
          </div>
        )
      }}
    </Field>
  )
}

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <div>
      <FieldCreator {...props}>
        <textarea {...input} {...restProps} type={"text"} placeholder={props.placeholder} />
      </FieldCreator>
    </div>

    // <Field name={props.name}>
    //   {({ input, meta }) => {
    //     const hasError = meta.error && meta.touched;
    //     return (
    //       <div>
    //         <textarea className={hasError ? s.error : undefined}
    //           {...input}
    //           type={"text"}
    //           placeholder={props.placeholder}
    //         />
    //         <div className={s.errorMsg}>
    //           {hasError && <div>{meta.error}</div>}
    //         </div>
    //       </div>
    //     )
    //   }}
    // </Field>
  )
}

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FieldCreator {...props}>
      <input {...input} type={"text"} placeholder={props.placeholder} />
    </FieldCreator>
  )
}