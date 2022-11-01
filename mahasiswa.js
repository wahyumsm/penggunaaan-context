import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import JumlahContext from '../context/JumlahProvider'

const Mahasiswa = () => {

    const { angka, setAngka } = useContext(JumlahContext)



    return (
        <>
            {angka}
            <Link style={{ marginLeft: 40, }} to='/penggunaan_context'><h3 style={{ color: 'black' }}>penggunaan_context</h3></Link>
        </>

    )
}

export default Mahasiswa
