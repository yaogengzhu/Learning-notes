import React from 'react'
import { Formik } from 'formik'

export default () => {
    return (
        <div>
            <Formik initialValues={{ firstName: 'zhuyaogeng' }} onSubmit={(data, {}) => {

            }}>
                <input type="text"/>
            </Formik>
        </div>
    )
}