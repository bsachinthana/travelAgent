import { BookingRequest } from './booking-request.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class BookingService {

  constructor(private fs: AngularFirestore) { }

  getRequests() {
    return this.fs.collection('BookingRequests').snapshotChanges();
  }

  createBooking(booking: BookingRequest) {
    return this.fs.collection('BookingRequests').add(booking);
  }

}
