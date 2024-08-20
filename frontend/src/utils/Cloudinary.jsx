const upload_preset="healthcare";
const cloud_name="mohamedhafid";

const Cloudinary = async(file) => {

  const uploadData=new FormData();

  uploadData.append('file',file);
  uploadData.append('upload_preset',upload_preset);
  uploadData.append('cloud_name',cloud_name);

  const response=await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,{
    method:'post',
    body:uploadData,
  });

  console.log(response);

  const data=await response.json();

  return data;
  
}

export default Cloudinary