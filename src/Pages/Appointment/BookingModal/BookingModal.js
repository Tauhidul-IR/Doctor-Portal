import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    //treatment is just another name of appointmentOption with name,slots,_id.
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.patientName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;


        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            name,
            slot,
            email,
            phone,
        }
        //TODO-- send data to the server and other operation
        console.log(booking)
        setTreatment(null)


    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='patientName' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full  btn btn-neutral' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;