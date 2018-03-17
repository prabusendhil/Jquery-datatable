
	'use strict';

var dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ]
];

var aDemoItems = [
    {
        "patientId":1,
        "otherId":"LanTest101",
        "firstName":"x1",
        "lastName":"yLanTest101",
        "gender":"M",
        "dob":"10/16/1941",
        "race":"Caucasian/White"
    },
     
    {
        "patientId":2,
        "otherId":"LanTest102",
        "firstName":"x2",
        "lastName":"yLanTest102",
        "gender":"M",
        "dob":"08/10/2005",
        "race":"Caucasian/White"
    },
     
    {
        "patientId":3,
        "otherId":"Test1111",
        "firstName":"x3",
        "lastName":"yTest1111",
        "gender":"M",
        "dob":"08/13/2015",
        "race":"Native Hawaian/Pacific Islander"
    },
    {
        "patientId":4,
        "otherId":"LanTest101",
        "firstName":"x1",
        "lastName":"yLanTest101",
        "gender":"M",
        "dob":"10/16/1941",
        "race":"Caucasian/White"
    },
     
    {
        "patientId":5,
        "otherId":"LanTest102",
        "firstName":"x2",
        "lastName":"yLanTest102",
        "gender":"M",
        "dob":"08/10/2005",
        "race":"Caucasian/White"
    },
     
    {
        "patientId":6,
        "otherId":"Test1111",
        "firstName":"x3",
        "lastName":"yTest1111",
        "gender":"M",
        "dob":"08/13/2015",
        "race":"Native Hawaian/Pacific Islander"
    },
    {
        "patientId":7,
        "otherId":"LanTest101",
        "firstName":"x1",
        "lastName":"yLanTest101",
        "gender":"M",
        "dob":"10/16/1941",
        "race":"Caucasian/White"
    },
     
    {
        "patientId":8,
        "otherId":"LanTest102",
        "firstName":"x2",
        "lastName":"yLanTest102",
        "gender":"M",
        "dob":"08/10/2005",
        "race":"Caucasian/White"
    },
     
    {
        "patientId":9,
        "otherId":"Test1111",
        "firstName":"x3",
        "lastName":"yTest1111",
        "gender":"M",
        "dob":"08/13/2015",
        "race":"Native Hawaian/Pacific Islander"
    },
    {
        "patientId":10,
        "otherId":"LanTest101",
        "firstName":"x1",
        "lastName":"yLanTest101",
        "gender":"M",
        "dob":"10/16/1941",
        "race":"Caucasian/White"
    },
     
    {
        "patientId":11,
        "otherId":"LanTest102",
        "firstName":"x2",
        "lastName":"yLanTest102",
        "gender":"M",
        "dob":"08/10/2005",
        "race":"Caucasian/White"
    },
     
    {
        "patientId":12,
        "otherId":"Test1111",
        "firstName":"x3",
        "lastName":"yTest1111",
        "gender":"M",
        "dob":"08/13/2015",
        "race":"Native Hawaian/Pacific Islander"
    },
    {
        "patientId":13,
        "otherId":"LanTest101",
        "firstName":"x1",
        "lastName":"yLanTest101",
        "gender":"M",
        "dob":"10/16/1941",
        "race":"Caucasian/White"
    },
     
    {
        "patientId":14,
        "otherId":"LanTest102",
        "firstName":"x2",
        "lastName":"yLanTest102",
        "gender":"M",
        "dob":"08/10/2005",
        "race":"Caucasian/White"
    },
     
    {
        "patientId":15,
        "otherId":"Test1111",
        "firstName":"x3",
        "lastName":"yTest1111",
        "gender":"M",
        "dob":"08/13/2015",
        "race":"Native Hawaian/Pacific Islander"
    },
]

// Unused FUnction for future reference
 
// $(document).ready(function() {
// 	console.log("SDasdasd")
//     $('#example1').DataTable( {
//         data: dataSet,
//         columns: [
//             { title: "Name" },
//             { title: "Position" },
//             { title: "Office" },
//             { title: "Extn." },
//             { title: "Start date" },
//             { title: "Salary" }
//         ]
//     } );

//     $('#examples').DataTable( {
//         data: aDemoItems,
//         "columns" : [
//             { "data" : "patientId" },
//             { "data" : "otherId" },
//             { "data" : "firstName" },
//             { "data" : "lastName" },
//             { "data" : "gender" },
//             { "data" : "dob" },
//             { "data" : "race" }
//         ]
//     } );
// } );
// 	function getData(){
// 	var div = document.getElementById('myData');
// 	var table  = document.createElement('table');
// 	var tbody = document.createElement('tbody')
// 	for(var i=0;i<2;i++){
// 	var tr = document.createElement('tr')
// 	for(var j=0;j<2;j++){
// 	var td = document.createElement('td');
// 	var text = document.createTextNode("NamData"+j);
// 	td.appendChild(text);
// 	tr.appendChild(td);
	
// 	}
	
// 	div.appendChild(table).appendChild(tbody).appendChild(tr);
// 	table.setAttribute('id','sasasamyClass');
// 	table.setAttribute('border','2');
// 	table.className='myClass Dasdas';
// 	table.style.color='green'
// 	}
	
// }

    // function used to create myDynamicData with table
    $(document).ready(function() {
    document.getElementsByTagName('body')[0].style.background="lightgrey" ;  
	document.getElementById('head').style.textAlign='center';
})
    function getDynamicData(){


		var data =[{name:'prabu',id:'1'},
					{name:'Kanag',id:'2'},
					{name:'Gomathi',id:'3'},
					{name:'Sekar',id:'4'}]

	
	var h = [];				
	for(var i=0; i<aDemoItems.length; i++){
		for(var key in aDemoItems[i]){
			if(h.indexOf(key) === -1) h.push(key)
		}
	}			
	var div = document.getElementById('commonContainer');
    div.style.margin = "20px";
	var table  = document.getElementById('example');
	var thead = document.createElement('thead');
	table.appendChild(thead);
	var tr = thead.insertRow(-1);

	for(var j=0; j<h.length; j++){
		var th  = document.createElement('th');
		th.innerHTML = h[j];
		tr.appendChild(th);
	}	
	
	var tbody = document.createElement('tbody');
		table.appendChild(tbody);
	for(var i=0; i<aDemoItems.length; i++){
		var tr = tbody.insertRow(-1);		
		tr.setAttribute('onclick','getValue('+aDemoItems[i]+')')
		for(var j=0; j<h.length; j++){
		var td  = document.createElement('td');
		td.innerHTML = aDemoItems[i][h[j]] ;
		
		tr.appendChild(td)

		}
		
	}

    $('#example').DataTable ({
    });
	
	// var div = document.getElementById('myDynamicData');
	// div.innerHTML ="";
	// div.appendChild(table);	
}
