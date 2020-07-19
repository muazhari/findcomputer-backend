import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

class ShopPostFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { initialValues, handleValidate, handleSubmit } = this.props;

    return (
      <div className="container display-flex w-50 flex-1-row">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={handleValidate}
        >
          {(props) => (
            <Form>
              <div className="container display-flex flex-1-row">
                <div className="container display-flex">
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="mb-4">
                    <label htmlFor="username">Name</label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                    />
                  </fieldset>

                  <ErrorMessage
                    name="description"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="mb-4">
                    <label htmlFor="password">Description</label>
                    <Field
                      id="description"
                      name="description"
                      type="text"
                      className="form-control"
                    />
                  </fieldset>
                </div>

                <div className="container display-flex">
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="mb-4">
                    <label htmlFor="password">Category</label>
                    <Field
                      id="category"
                      name="category"
                      type="text"
                      className="form-control"
                    />
                  </fieldset>

                  <ErrorMessage
                    name="price"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="mb-4">
                    <label htmlFor="password">Price</label>
                    <Field
                      id="price"
                      name="price"
                      type="text"
                      className="form-control"
                    />
                  </fieldset>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-primary m-4">
                Post
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ShopPostFormComponent;
