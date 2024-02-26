export const fetchData = async (
  url: string,
  method: 'GET' | 'POST' | 'PUT ' | 'DELETE' = 'GET',
  data?: any,
  isFormData = false,
) => {
  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('') || null : null;
  const headers: any = {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Accept-Language': 'vi',
  };
  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }
  if (!!accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const config: any = {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers,
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: isFormData ? DataTransfer : JSON.stringify(DataTransfer), // body data type must match "Content-Type" header
  };
  const response = await fetch(url, config);
  const contentType = response.headers.get('Content-Type');
  if (!response.ok) {
    if ((contentType && contentType.includes('application/problem+json')) || response.status == 400) {
      const errorData = await response.json();
      if (errorData.message) {
        // Lấy thông báo lỗi từ dữ liệu JSON
        throw new Error(errorData.message);
      }
    }
    throw new Error('Network response was not ok');
  }

  if (contentType && contentType.includes('application/json')) {
    return response.json(); // parses JSON response into native JavaScript objects
  }
  return response.text();
};
