const {
    getAuthToken,
    getSpreadSheetValues
  } = require('./googleSheetsService.js');

  require('dotenv').config()
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const sheetName = process.env.SHEET_NAME;


  let names = [];//array for storing names
  let sem = []; //storing semester
  let branch = [] // array for branch
  let pronoun = [];//array for girls
  let language = [];
  let domain = [];
  let experience = []
  let email = []
  let computer = []
  let phone = [];//array for storing phone number
  let whatsapp_id = []

  async function testGetSpreadSheetValues() {
    return new Promise (async(resolve,reject) => {
      try {
        const auth = await getAuthToken();
        const response = await getSpreadSheetValues({
          spreadsheetId,
          sheetName,
          auth
        })
        //[this prints phone number]
        const limit = response.data.values.length
        
        // console.log(limit)
        for(i=1;i<limit;++i){
          const members = response.data.values[i]
          names.push(members[0])
          sem.push(members[1])
          branch.push(members[2])
          pronoun.push(members[3])
          language.push(members[4])
          domain.push(members[5])
          experience.push(members[6])
          email.push(members[7])
          computer.push(members[8])
          phone.push(members[9]);
          whatsapp_id.push(members[9] + '@c.us');
  
        }
        let datas = [names,sem,branch,pronoun,language,domain,experience,email,computer,phone,whatsapp_id]
         resolve(datas)
        
      } catch(error) {
        console.log(error.message, error.stack);
        reject(error)
      }
    })
  }    
  //   try {
  //     const auth = await getAuthToken();
  //     const response = await getSpreadSheetValues({
  //       spreadsheetId,
  //       sheetName,
  //       auth
  //     })
  //     //[this prints phone number]
  //     const limit = response.data.values.length
      
  //     // console.log(limit)
  //     for(i=1;i<limit;++i){
  //       const members = response.data.values[i]
  //       names.push(members[0])
  //       sem.push(members[1])
  //       branch.push(members[2])
  //       pronoun.push(members[3])
  //       language.push(members[4])
  //       domain.push(members[5])
  //       experience.push(members[6])
  //       email.push(members[7])
  //       computer.push(members[8])
  //       phone.push(members[9]);
  //       whatsapp_id.push(members[9] + '@c.us');

  //     }
  //     let datas = [names,sem,branch,pronoun,language,domain,experience,email,computer,phone,whatsapp_id]
  //      return datas;
      
  //   } catch(error) {
  //     console.log(error.message, error.stack);
  //   }
  // }
  module.exports = {
    testGetSpreadSheetValues
  }
  // function main() {
  //   testGetSpreadSheetValues();
  // }
  // main()
