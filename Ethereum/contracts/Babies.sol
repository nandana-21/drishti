pragma solidity ^0.5.0;

contract BabiesWithoutBorders{

     uint[] public childrenAgen;
     uint[] public parentAgen;
     uint idDigits = 8;
     uint idMod = 10 ** idDigits; 
     
    modifier yrsMarriage(uint yearsMar){
        require(yearsMar >= 2);
         _;
     }
     
    modifier agencies(address _caller){
        require(msg.sender == _caller );
        _;
    }
    
    function createId(uint age, uint medCond, uint gen , uint docVeri ) public returns(uint ){ // only agencies
        require(docVeri == 1);
        uint rand = uint ( keccak256(abi.encodePacked( age, medCond, gen ,docVeri )));
        rand = rand % idMod;
        childrenAgen.push(rand);
        return rand;
    }
    
    
    function createParentId(uint marStatus, uint net , uint ageComb , uint docVeri, uint yrsMar) public yrsMarriage(yrsMar) returns (uint)
    {   require(docVeri == 1);
        uint rand = uint ( keccak256(abi.encodePacked( marStatus, net, ageComb ,docVeri, yrsMar)));
        rand = rand % idMod;
        parentAgen.push(rand);
        return rand;
    }
    
    function parentReq(uint age, uint medCond, uint gen , uint docVeri ) view public returns(int ){ 
        uint parentReqId = uint ( keccak256(abi.encodePacked(age,medCond, gen ,docVeri))) % idMod;
        for (uint i = 0; i<= childrenAgen.length ; i ++){
            if(childrenAgen[i] == parentReqId){
                return int(childrenAgen[i]); //create a new contract
            }
            else{
                return -1;
            }
        }
    }
    
    function childReq(uint marStatus, uint net , uint ageComb , uint docVeri, uint yrsMar) view public  returns (int){
        uint childReqId = uint ( keccak256(abi.encodePacked( marStatus, net, ageComb ,docVeri, yrsMar))) % idMod;
        for (uint i = 0; i<= parentAgen.length ; i ++){
            if(parentAgen[i] == childReqId){
                return int(parentAgen[i]);
            }else{
                return -1;
            }
        }
    }
    
}
