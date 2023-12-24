const API_DOMAIN = "http://localhost:9000/api/";

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "GET",
  });
  return await response.json();
};

export const post = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  return await response.json();
};

export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
  });
  if (!response.ok) {
    return await response.json();
  }
};

export const put = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  return await response.json();
};
export const uploadFile = async (path, formData = new FormData()) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    body: formData,
  });
  return await response.json();
};
