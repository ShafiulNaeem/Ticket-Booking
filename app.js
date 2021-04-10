var value = Vue.createApp({
    data(){
        return {
            msg: "TICKET BOOKING SYSTEM ",

            Username: "",
            mobile: "",
            confirmed: false,

            seatStates: {
                sold: {
                    text: "Sold",
                    color: "#ff0000"
                },
                available: {
                    text: "Available",
                    color: "#fff"
                },
                booked: {
                    text: "Booked",
                    color: "gray"
                },
                selected: {
                    text: "Selected",
                    color: "#00ff00"
                }
            },
            seats: [
                {
                    name: "A1",
                    type: "available",
                    price: 500
                },
                {
                    name: "A2",
                    type: "available",
                    price: 500
                },
                {
                    name: "A3",
                    type: "available",
                    price: 500
                },
                {
                    name: "A4",
                    type: "available",
                    price: 500
                },
                {
                    name: "B1",
                    type: "available",
                    price: 450
                },
                {
                    name: "B2",
                    type: "available",
                    price: 450
                },
                {
                    name: "B3",
                    type: "available",
                    price: 450
                },
                {
                    name: "B4",
                    type: "available",
                    price: 450
                },
                {
                    name: "C1",
                    type: "sold",
                    price: 500
                },
                {
                    name: "C2",
                    type: "sold",
                    price: 500
                },
                {
                    name: "C3",
                    type: "sold",
                    price: 500
                },
                {
                    name: "C4",
                    type: "sold",
                    price: 500
                },
                {
                    name: "D1",
                    type: "available",
                    price: 400
                },
                {
                    name: "D2",
                    type: "available",
                    price: 400
                },
                {
                    name: "D3",
                    type: "available",
                    price: 400
                },
                {
                    name: "D4",
                    type: "available",
                    price: 400
                },
                {
                    name: "E1",
                    type: "available",
                    price: 300
                },
                {
                    name: "E2",
                    type: "available",
                    price: 300
                },
                {
                    name: "E3",
                    type: "booked",
                    price: 300
                },
                {
                    name: "E4",
                    type: "booked",
                    price: 300
                },
                {
                    name: "F1",
                    type: "available",
                    price: 300
                },
                {
                    name: "F2",
                    type: "available",
                    price: 300
                },
                {
                    name: "F3",
                    type: "available",
                    price: 300
                },
                {
                    name: "F4",
                    type: "available",
                    price: 300
                }
            ],

            appliedCoupon: null,
            couponCode: "",
            coupons: [
                {
                    code: "100takaoff",
                    discount: 100
                },
                {
                    code: "200takaoff",
                    discount: 200
                }
            ]
        }
    },
    computed:{
      selectedSeats(){
          let select = this.seats.filter((item) => item.type === 'selected' );
          return select;
      },
      totalCost(){
          let total = 0;
          this.selectedSeats.forEach((seat) =>{
              total += seat.price;
          });
          if (this.appliedCoupon != null){
              total =total - this.appliedCoupon.discount;
          }
          console.log(total);
          return total;
      }
    },
    watch:{
        couponCode(value){
            if (value.length === 10){
                let searchCoupon = this.coupons.filter(
                    (coupon) => coupon.code === value
                );

                if (searchCoupon.length === 1){
                    this.appliedCoupon = searchCoupon[0];
                    this.couponCode='';
                }else {
                    alert('Coupon Code is not Valid !!');
                }
            }

        }
    },
    methods:{
        selectSeat(index){
          let clickedSeat = this.seats[index];
          if ( clickedSeat.type =='sold' || clickedSeat.type =='booked'){
              alert('Please Select other Seat,,,');
              return;
          }
            // if (this.selectedSeats.length > 2){
            //     alert('You can not more than 3 Seats !!');
            //     return;
            // }
            clickedSeat.type =
                clickedSeat.type ==='selected'? 'available' : 'selected';
          console.log(clickedSeat);
        },
        confirmSeat(){
            // if (!this.Usermobile || !this.Username ){
            //
            // }
            //alert('Please Enter Your Name and Phone Number');
            console.log('what happened');


        }

    }

});
value.mount('#app');
