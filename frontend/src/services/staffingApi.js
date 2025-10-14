import { BASE_URL } from "./constants";

export const staffingApi = {
  async create(requestBody) {
    const res = await fetch(`${BASE_URL}/staffing`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    if (!res.ok) {
      let message = `Failed to create staffing request (status ${res.status})`;
      try {
        const data = await res.json();
        if (data?.message) message = data.message;
      } catch {}
      throw new Error(message);
    }
    return res.json();
  },

  async list() {
    const res = await fetch(`${BASE_URL}/staffing`);
    if (!res.ok) {
      let message = `Failed to fetch staffing requests (status ${res.status})`;
      try {
        const data = await res.json();
        if (data?.message) message = data.message;
      } catch {}
      throw new Error(message);
    }
    return res.json();
  },

  async remove(id) {
    const res = await fetch(`${BASE_URL}/staffing/${id}`, { method: "DELETE" });
    if (!res.ok) {
      let message = `Failed to delete staffing request (status ${res.status})`;
      try {
        const data = await res.json();
        if (data?.message) message = data.message;
      } catch {}
      throw new Error(message);
    }
    return res.json();
  },
};


