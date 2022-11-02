import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { loadWeb3 } from '../apis/api';
import { airdrop, airdrop_ABI } from '../utilies/Contract';
import './GetData_style.css'

export default function Get_Data() {
    const [tokenValue, settokenValue] = useState("")
    const [addressesValue, setaddressesValue] = useState('')
    const [AmountsValue, setAmountsValue] = useState('')


    const Submit_data = async () => {
        let acc = await loadWeb3();
        if (acc == "No Wallet") {

        }
        else if (acc == "Wrong Network") {

        } else {

            try {
                
                let pathArray = addressesValue.split(',');
                let Number_Array=AmountsValue.split(',')
                console.log("pathArray",pathArray.length);

                if(Number_Array.length==pathArray.length){

                    const web3 = window.web3;
                    let contractOf = new web3.eth.Contract(airdrop_ABI, airdrop);
                    await contractOf.methods.multisendToken(tokenValue,pathArray,Number_Array).send({
                        from: acc
                    });
                    toast.success('Transition Confirm')

                }else{
                    toast.error("Array length is not match")
                    
                }

            } catch (e) {
                console.log("Error While data", e);
            }
        }
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-2">

                    </div>

                    <div className="col-lg-8">

                        <div className="card claim_card">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Token address</label>
                                <input type="text" class="form-control"  placeholder="Token address" onChange={(e)=>settokenValue(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Addresses</label>
                                <input type="text" class="form-control"  placeholder="Addresses Arrays" onChange={(e)=>setaddressesValue(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Amounts</label>
                                <input type="text" class="form-control"  placeholder="Amounts Arrays" onChange={(e)=>setAmountsValue(e.target.value)} />
                            </div>
                            <div class="col-auto">
                                <button className='claim_btn' onClick={() => Submit_data()}>Send</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
            </div>


        </div>
    )
}
