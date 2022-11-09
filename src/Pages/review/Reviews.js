import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewsRow from './ReviewsRow';

const Reviews = () => {

  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);



  useEffect(() => {
    if (!user?.email)
      return;
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      }
    })

      .then(res => res.json())
      .then(data => setReviews(data))
  }, [user?.email])

  const handleDeleted = id => {
    const proceed = window.confirm('Are you sure , You want to sure cancel review');
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE'

      })
        .then(res => res.json())
        .then(data => {
          console.log(data);


          if (data.deletedCount > 0) {
            alert('Successfully deleted');
            const remaining = reviews.filter(odr => odr._id !== id);
            setReviews(remaining);
          }
        })
    }

  }

  const handleUpdate = id => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status: 'Approved' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter(odr => odr._id !== id);
          const approving = reviews.find(odr => odr._id === id);
          approving.status = 'Approved'
          const newReviews = [approving, ...remaining,];
          setReviews(newReviews)
        }
      })
  }
  return (
    <div>
      <h2 className='text-5xl text-center m-10'>Your Total Reviews: {reviews.length}</h2>

      <div className="overflow-x-auto w-full bg-teal-900">
        <table className="table w-full shadow-lg rounded-lg">

          <thead>
            <tr>
              <th>
                <label>
                  Delete Review
                </label>
              </th>
              <th>Name&Image</th>
              <th>Service</th>
              <th>Reviews</th>
              <th>Updated Review</th>
            </tr>
          </thead>
          <tbody>
            {
              reviews.map(review => <ReviewsRow
                key={review._id}
                review={review}
                handleDeleted={handleDeleted}
                handleUpdate={handleUpdate}

              ></ReviewsRow>)
            }


          </tbody>


        </table>
      </div>
    </div>
  );
};

export default Reviews;