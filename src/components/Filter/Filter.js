import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { contactsAction, getFilter } from '../../redux'
import './Filter.scss'

const Filter = () => {
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()

  return (
    <label className="Filter_Input">
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(event) =>
          dispatch(contactsAction.changeFilter(event.currentTarget.value))
        }
      />
    </label>
  )
}

// const mapStateToProps = (state) => ({
//   filter: state.contacts.filter,
// })

// const mapDispatchToProps = (dispatch) => ({
//   changeFilter: (event) =>
//     dispatch(contactActions.changeFilter(event.currentTarget.value)),
// })

export default Filter
