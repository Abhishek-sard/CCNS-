import React, { useState, useEffect } from "react";

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    order: 0,
    image: null,
  });

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/team");
      const data = await response.json();
      setTeamMembers(data);
    } catch (error) {
      console.error("Error fetching team members:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("role", formData.role);
      formDataToSend.append("bio", formData.bio);
      formDataToSend.append("linkedin", formData.linkedin);
      formDataToSend.append("twitter", formData.twitter);
      formDataToSend.append("facebook", formData.facebook);
      formDataToSend.append("order", formData.order);

      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      const url = editingMember
        ? `http://localhost:5000/api/team/${editingMember._id}`
        : "http://localhost:5000/api/team";

      const method = editingMember ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formDataToSend,
      });

      if (response.ok) {
        await response.json(); // just wait for JSON so promise resolves
        alert(editingMember ? "Team member updated successfully!" : "Team member added successfully!");
        resetForm();
        fetchTeamMembers();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error saving team member:", error);
      alert("Error saving team member. Please try again.");
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      bio: member.bio || "",
      linkedin: member.linkedin || "",
      twitter: member.twitter || "",
      facebook: member.facebook || "",
      order: member.order || 0,
      image: null,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/team/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("Team member deleted successfully!");
          fetchTeamMembers();
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error deleting team member:", error);
        alert("Error deleting team member. Please try again.");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      bio: "",
      linkedin: "",
      twitter: "",
      facebook: "",
      order: 0,
      image: null,
    });
    setShowForm(false);
    setEditingMember(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700">Team Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Team Member
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold mb-4">
            {editingMember ? "Edit Team Member" : "Add New Team Member"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role *
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Twitter URL
                </label>
                <input
                  type="url"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Facebook URL
                </label>
                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Order
                </label>
                <input
                  type="number"
                  name="order"
                  value={formData.order}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleInputChange}
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {editingMember ? "Update Team Member" : "Add Team Member"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member._id} className="bg-white p-6 rounded-lg shadow-md">
            {member.image && (
              <img
                src={`http://localhost:5000${member.image}`}
                alt={member.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-bold text-blue-700 mb-2">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{member.role}</p>
            {member.bio && (
              <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
            )}
            <div className="flex gap-2 mb-4">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>
              )}
              {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
                  Facebook
                </a>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(member)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(member._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {teamMembers.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">No team members added yet.</p>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;

