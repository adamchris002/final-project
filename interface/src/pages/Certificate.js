import React from 'react'

const Certificate = () => {
  return (
    <div className="halaman-certificate">
        <h1 className="text-center">Halaman Sertifikat</h1>
        <p className="text-center">Halaman untuk melihat sertifikat</p>
        <div className='box-table m-3'>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>1. ID</th>
                        <th>2. Name</th>
                        <th>3. Image</th>
                        <th>4. Date</th>
                        <th>5. Place</th>
                        <th>6. Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default Certificate