let roomtype = document.querySelector('.roomtype');
let roomt = document.querySelector('.roomt');
let nowurl = location.search.split('=')[1];

let url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/';
const token = "bYNoI0q5IBtQKhCVTc5lFoyos1fS6Xap2dPPyAW1rTEeXPB1k6D7Zil8vX2Q";
let roomsData = [];


const getdata = (links)=>{

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.get(links)
        .then((res) => {

            if(nowurl===undefined){

            roomsData = res.data.items;
            render();

            }/*else{

                roomsData = res.data.room;
                rooms();
            }*/
            

        })

}

getdata(`${url}rooms`);

getdata(`${url}room/${nowurl}`);


function render() {

    let str = "";
    roomsData.forEach((item) => {


        str += `<li>

		<div class="roomphoto" style="background-image: url(${item.imageUrl})"></div>	
		<div class="roominfo">
			<p class="title">房型名稱：${item.name}</p>
			<p>平日(一~四)價格：${item.normalDayPrice}元</p>
            <p>假日(五~日)價格：${item.holidayPrice}元</p>            
        </div>
        <a class="reserver" href="./room.html?recommed=${item.id}">訂房去</a>
		</li>`;

    });
    roomtype.innerHTML = str;

}

/*
function rooms() {

    let str = "";
    roomsData.forEach((item) => {


        str += `<li>

		<div class="roomphoto" style="background-image: url(${item.imageUrl})"></div>	
		<div class="roominfo">
			<p class="title">房型名稱：${item.name}</p>
			<p>平日(一~四)價格：${item.normalDayPrice}元</p>
            <p>假日(五~日)價格：${item.holidayPrice}元</p>
            <p>${item.description}</p>
        </div>
        
		</li>`;

    });
    roomtype.innerHTML = str;

    
}

*/