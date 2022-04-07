# TRANSACTION APP

## Installment
Please use `yarn install` to install the dependencies.
Then use `yarn run dev` to run in development mode

## Testing
You can test the api point by requesting a post request in localhost:3000 with a transactions json scheme. The request will return all the items as swell as the new object property, is_recurred. The is_recurred property will be true if the transaction is recurred.

1. How would you measure the accuracy of your approach?
Given the time limit, it was not possible to implement a full-fledged system. However, I managed to implement a system, which will filter a json file and return a new json file with the new is_recurred property. The filter only takes in consideration whether two items have the same amount price.

2. How would you know whether solving this problem made a material impact on customers?
Is quite beneficial for a customer to be able to track their expenses in a much more intelligent way. Being able to analyse and see what your payments are and how often, provides an exceptional experience for the customer.

3. How would you deploy your solution?
I would deploy the solution on Heroku.

4. What other approaches would you investigate if you had more time?
I would obviously have spend more time analysing the different possible filters that can be applied in order to maximise the efficiency. For example an algorithm that takes in consideration similar words in the description of the item and price ranges. Filters whether a certain payment happens x time of the month.