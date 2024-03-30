import { Field } from "react-final-form";
import s from './FieldControls.module.css'

export const Textarea = (input, meta) => {
    return (
        <div>
            <Field name={input.name}>
              {() => {
                const hasError = meta.error && meta.touched;
                return (
                  <div>
                    <textarea className={hasError ? s.error : undefined}
                      {...input}
                      type={"text"}
                      placeholder={input.placeholder}
                    />
                    <div className={s.errorMsg}>
                      {hasError && <div>{meta.error}</div>}
                    </div>
                  </div>
                )
              }}
            </Field>
          </div>
    )
}