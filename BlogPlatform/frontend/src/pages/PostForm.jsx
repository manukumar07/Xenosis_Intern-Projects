import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePostContext } from "../context/PostContext";
import toast from "react-hot-toast";

const PostForm = () => {
  const { createPost } = usePostContext();
  const navigate = useNavigate();

  const initialValues = { title: "", content: "", tags: "" };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    tags: Yup.string().required("Tags are required"),
  });

  const handleSubmit = async (values) => {
    const post = {
      title: values.title.trim(),
      content: values.content.trim(),
      tags: values.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      await createPost(post);
      toast.success("Post created successfully!");
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Error creating post. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F5F5F5] p-6">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="w-full max-w-xl bg-[#FFFFFF] shadow-lg p-8 rounded-lg">
            <h1 className="text-3xl font-bold text-center text-[#2C3E50] mb-6">
              Create Post
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
              Create Post
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostForm;
