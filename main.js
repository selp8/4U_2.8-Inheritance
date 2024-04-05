/**
 * ICS4U - Mr. Brash
 *  
 * 2.8 - Inheritance & Super! 🦸🏻
 * 
 * Read the README.md file (right-click it and select Open Preview)
 * 
 * Author: Selena
 */

'use strict';

// The lib.round() function is available
const lib = require("./library.js");

class BankAccount{
    nickname = "My Account";
    #type = "Account";
    #balance = 0.0;
    constructor(nickname,type,balance){
        this.nickname=nickname;
        this.#type=type;
        this.#balance=balance;
    }
    debit(amt){ //take out
        if(amt>0 && debit<=this.#balance){
            this.#balance-=amt;
            Math.round(this.#balance * 100)/100;
            return true;
        }
        return false;
    }
    credit(amt){ //adds amt
        if(amt>0){
            this.#balance+=amt;
            Math.round(this.#balance * 100)/100;
            return true;
        }
        return false;
    }

    get type(){
        return this.#type;
    }

    get balance(){
        return this.#balance;
    }
}

class SavingsAccount extends BankAccount{
    #interest_rate=0.03
    
    constructor(interest_rate){
        this.#interest_rate=interest_rate;
        this.nickname="Basic Savings";
        this.type="Checking Account";
    }

    get interest_rate(){
        return this.#interest_rate;
    }

    set interest_rate(amt){
        if(this.#interest_rate>0 && this.#interest_rate<1){
            this.#interest_rate=amt;
        }
    }

    apply_interest(){
        
    }
}

class CheckingAccount extends BankAccount{

}
