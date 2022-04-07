import { Request, Response } from "express";
import _ from "lodash";

export const index = async (req: Request, res: Response) => {
  try {
      const transactions= req.body.transactions;

      if (!transactions){
          res.status(404).json("No transactions found");
      } 

      const results= [];

      //check is there are matching elements in array
      for(let i=0; i<transactions.length; i++){
        let isRecurring= false;
        let matches = 0;
          for(let j=0; j<transactions.length; j++){
              if(transactions[i].amount === transactions[j].amount){
                matches++;
                }
                if(matches > 1){
                  isRecurring= true;
                }
            }
        const transaction= {
          amount: transactions[i].amount,
          date: transactions[i].date,
          description: transactions[i].description,
          is_recurring: isRecurring
        };

        results.push(transaction);
      }

    return res.status(200).json({results});
  } catch(err){
    console.log(err);
    return res.status(500).json({err});
  }
};
  