// OPEN THE TERMINAL, TYPE "npm install mysql"
// requires Node.js, if youre not sure if you have it type "node --version" in the terminal


const {createPool} = require('mysql')

// enter your real SQL user data here
const pool = createPool({
    host: 'localhost',
    user: 'sqlusername',
    password: 'sqluserpassword',
    connectionLimit: 10  
})

// "async" and "await" are used to allow "SelectFrom()"" and other SQL queries in JS to appear on screen in chronological order of our code.
async function main(){
    console.log('this text comes before the SelectFrom()')
    await SelectFrom()
    console.log('this text comes after the SelectFrom()')
    await InsertInto()
    console.log('this text comes after the InsertInto()')

}

// "return new Promise" allows this task to happen at the moment it is called, chronologically.
function SelectFrom(){
  return new Promise((resolve, reject) => {
    pool.query(`
        SELECT *
        FROM my_guitar_shop.order_items
        // WHERE
        // LIMIT 1
        // ORDER BY
        `,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            console.log(res);
            resolve();
          }
        }
      );
    }
  )
}

//
function InsertInto(){ 
  return new Promise((resolve, reject) => {
    let column1 = ''
    let column2 = ''
    let column3 = ''
    pool.query(`INSERT INTO my_guitar_shop.TABLENAME (COLUMN1, COLUMN2, COLUMN3, COLUMN4) VALUES
    (${COLUMN1}, '${COLUMN2}', '${COLUMN3}')`,
    (err,res)=>{ // error or result
        return console.log(err,res)
    })
  }) 
}

main()