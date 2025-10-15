import React, { useEffect, useState } from "react";


const BranchManagement = () => {
    const [branches, setBranches] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
    });
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_URL = "http://localhost:5000/api/branches";


    const fetchBranches = async () => {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Failed to fetch branches");
            const data = await res.json();
            setBranches(data);
        } catch (error) {
            console.error("Error fetching branches:", error);
        }
    };

    useEffect(() => {
        fetchBranches();
    }, []);

    // ✅ Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ Create or Update branch
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const method = editId ? "PUT" : "POST";
            const url = editId ? `${API_URL}/${editId}` : API_URL;

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Failed to save branch: ${errorText}`);
            }

            alert(editId ? "Branch updated successfully!" : "Branch added successfully!");
            setFormData({ name: "", address: "", phone: "" });
            setEditId(null);
            fetchBranches();
        } catch (err) {
            console.error("Error saving branch:", err);
            alert("Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Edit branch
    const handleEdit = (branch) => {
        setFormData({
            name: branch.name,
            address: branch.address,
            phone: branch.phone,
        });
        setEditId(branch._id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // ✅ Delete branch
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this branch?")) return;

        try {
            const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            const data = await res.json();

            if (!res.ok) {
                // Show server error message if available
                throw new Error(data.message || "Failed to delete branch");
            }

            alert(data.message || "Branch deleted successfully!");
            fetchBranches(); // Refresh branch list
        } catch (error) {
            console.error("Error deleting branch:", error);
            alert("Error deleting branch: " + error.message);
        }
    };



    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
                Branch Management
            </h2>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Branch Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500"
                        placeholder="e.g. NSW: Sydney"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Address
                    </label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500"
                        placeholder="Full Address"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500"
                        placeholder="Contact Number"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
                >
                    {loading
                        ? "Saving..."
                        : editId
                            ? "Update Branch"
                            : "Add Branch"}
                </button>
            </form>

            {/* Branch List Section */}
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">All Branches</h3>
                {branches.length === 0 ? (
                    <p className="text-gray-500 text-center">No branches found.</p>
                ) : (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Address</th>
                                <th className="border p-2">Phone</th>
                                <th className="border p-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {branches.map((branch) => (
                                <tr key={branch._id} className="hover:bg-gray-50">
                                    <td className="border p-2">{branch.name}</td>
                                    <td className="border p-2">{branch.address}</td>
                                    <td className="border p-2">{branch.phone}</td>
                                    <td className="border p-2 text-center">
                                        <button
                                            onClick={() => handleEdit(branch)}
                                            className="px-3 py-1 bg-yellow-400 text-white rounded mr-2 hover:bg-yellow-500"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(branch._id)}
                                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default BranchManagement;
