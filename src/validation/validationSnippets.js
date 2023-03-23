// const fetchData = async () => {
  //     try{
  //       const {data} = await axios.get("/cards/card/"+id);
  //       let isIdValid = validateId({id});
  //       if (isIdValid) {
  //         const {data} = await axios.get("/cards/card/"+id);
  //         if(!data){
  //           navigate(ROUTES.PAGENOTFOUND);
  //           return;
  //         }
  //         setInputState(data);
  //       }
  //       else{
  //         navigate(ROUTES.PAGENOTFOUND);
  //       }
  //       console.log(data);
  //     }
  //     catch(err){
  //       console.log(err);
  //     }
  //   }
  //   fetchData();