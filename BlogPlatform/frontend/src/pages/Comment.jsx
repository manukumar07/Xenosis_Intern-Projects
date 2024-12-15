import { useState } from "react";

const Comment = ({ comment, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  const handleEditChange = (e) => {
    setEditedComment(e.target.value);
  };

  const handleSaveEdit = () => {
    onEdit(editedComment);
    setIsEditing(false);
  };

  return (
    <li className="bg-[#ECF0F1] p-6 rounded-lg shadow-md flex justify-between items-start mb-4">
      {isEditing ? (
        <div className="w-full">
          <textarea
            value={editedComment}
            onChange={handleEditChange}
            className="w-full p-3 border-2 border-[#BDC3C7] rounded-lg mb-4 text-[#34495E] focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]"
            rows="2"
          />
          <div className="flex gap-4 justify-start">
            <button
              onClick={handleSaveEdit}
              className="px-2 py-2 bg-[#1ABC9C] text-white rounded-lg hover:bg-[#16A085] transition duration-300"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <p className="text-[#2C3E50] text-lg">{comment}</p>
      )}
      <div className="flex gap-4 mt-4 justify-end items-center">
        <button
          onClick={() => setIsEditing(true)}
          className="text-[#3498DB] font-semibold hover:text-[#2980B9] transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-[#E74C3C] font-semibold hover:text-[#C0392B] transition duration-300"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Comment;
