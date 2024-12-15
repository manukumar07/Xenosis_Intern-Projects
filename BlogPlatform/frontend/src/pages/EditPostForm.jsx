import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePostContext } from "../context/PostContext";

const EditPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, editPost } = usePostContext();
  const [initialValues, setInitialValues] = useState({
    title: "",
    content: "",
    tags: "",
  });

  useEffect(() => {
    const post = posts.find((post) => post._id === id);
    if (post) {
      setInitialValues({
        title: post.title,
        content: post.content,
        tags: post.tags.join(", "),
      });
    } else {
      navigate("/");
    }
  }, [id, posts, navigate]);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    tags: Yup.string().test(
      "not-empty",
      "Tags cannot be empty or just commas",
      (value) =>
        value ? !value.split(",").some((tag) => tag.trim().length === 0) : true
    ),
  });

  const handleSubmit = (values) => {
    const updatedPost = {
      title: values.title,
      content: values.content,
      tags: values.tags.split(",").map((tag) => tag.trim()),
    };
    editPost(id, updatedPost);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F5F5F5] p-6">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ setFieldValue }) => (
          <Form
            className="w-full max-w-xl bg-[#FFFFFF] shadow-lg p-8 rounded-lg"
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              height: "auto",
            }}
          >
            <h1 className="text-3xl font-bold text-center text-[#2C3E50] mb-6">
              Edit Post
            </h1>

            {/* Title Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                Title
              </label>
              <Field
                type="text"
                name="title"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 border-[#BDC3C7] focus:ring-[#1ABC9C]"
                placeholder="Enter post title"
              />
              <ErrorMessage
                name="title"
                component="span"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Content Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                Content
              </label>
              <Field
                as="textarea"
                name="content"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 border-[#BDC3C7] focus:ring-[#1ABC9C] h-32"
                placeholder="Write your post content here"
              />
              <ErrorMessage
                name="content"
                component="span"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Tags Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                Tags (comma separated)
              </label>
              <Field
                type="text"
                name="tags"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 border-[#BDC3C7] focus:ring-[#1ABC9C]"
                placeholder="Tag1, Tag2, Tag3"
              />
              <ErrorMessage
                name="tags"
                component="span"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#1ABC9C] text-white font-semibold hover:bg-[#16A085] transition-colors duration-300"
            >
              Update Post
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditPostForm;
