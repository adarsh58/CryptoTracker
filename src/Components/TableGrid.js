import React from 'react'

const TableGrid = () => {

    const handleAddClick = () => {
        alert("Open Modal")
    }



    return (
        <div className='container my-10'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Coin</th>
                        <th scope="col">Last Price</th>
                        <th scope="col">Cost Price</th>
                        <th scope="col">PnL</th>
                        <th scope="col">
                            <div className="container">
                                Action
                            </div>


                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>BTC</td>
                        <td>65000</td>
                        <td>62000</td>
                        <td style={{ backgroundColor: "forestgreen" }}>-1000</td>
                        <td>
                            <div className="container">
                                <i className="fa-solid fa-plus" onClick={handleAddClick}></i>
                                <i className="fa-solid fa-minus mx-3"></i>
                            </div> </td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default TableGrid
