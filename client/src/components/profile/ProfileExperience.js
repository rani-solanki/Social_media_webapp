import React from 'react';
import propTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
    experience :{
        company,title,location,current,from,to,description
    }
}) => {
    return (
        <div>
            <h3 className="text-dark">{company}</h3>
            <p>
                <Moment format='YYYY/MM/DD'>{from}</Moment> - {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
            </p>
            <p>
                <strong>Position :</strong> {title}
            </p>
            <p>
                <strong>description :</strong>{description}
            </p>
        </div>
            
        
    )
}

ProfileExperience.propTypes = {
    experience : propTypes.func.isRequired,
}

export default ProfileExperience
