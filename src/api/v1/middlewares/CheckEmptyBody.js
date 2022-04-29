// const emptyBody = (request, response, next) => {

//     const { body } = request;
  
//     if (Object.keys(body).length === 0) {
  
//       ServerResponse(request, response, 400, { error: 'empty request body' });
  
//     } else {
  
//       next();
  
//     }
  
//   };

//   export default emptyBody