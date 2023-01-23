import { useReducer, useState } from 'react';
import React from 'react'
import { useForm } from "react-hook-form";
import './form.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper, TextField, AccordionDetails, AccordionSummary, Accordion, Typography } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import { PostNFT, claudinaryPost } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';



const form = () => {

    const dispatch = useDispatch()
    const [image, setImagen] = useState("")

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = (data, e) => {
        dispatch(PostNFT(data))
        e.target.reset()
    };
    const name = watch('nombre')
    const description = watch('descripcion')
    console.log(name)
    console.log(description)
    const handleChange = () => {
        if(name && description && image){
            dispatch(claudinaryPost(image))
        }
    }

    const propiedad1 = watch('propiedad_1')
    const value1 = watch('value_1')
    const propiedad2 = watch('propiedad_2')
    const value2 = watch('value_2')
    const propiedad3 = watch('propiedad_3')

    return (

        <Paper variant="outlined" className='paper'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="standard-basic"
                    label="Nombre del NFT"
                    variant="standard"
                    {...register("nombre",
                        // { required: 'El nombre es requerido' }
                        )}
                />

                <span className='errors'>{errors?.nombre?.message}</span>
                <Textarea
                    className='textarea'
                    disabled={false}
                    minRows={2}
                    placeholder="Descripcion"
                    size="lg"
                    variant="outlined"
                    sx={{ fontFamily: 'Helvetica' }}
                    {...register("descripcion",
                        // { required: { value: true, message: "Debes ingresar una descripcion" } }
                        )}
                />
                <span className='errors'>{errors?.descripcion?.message}</span>
                <div className='image'>
                
                <Button variant="contained" component="label"> 
                    {/* Agregar imagen */}
                    <input
                        // hidden
                        className='file'
                        type='file'
                        {...register("image",
                            { required: { value: true, message: "Debes ingresar una imagen" } }
                            )}
                        placeholder='Imagen'
                        onChange={(e) => setImagen(e.target.files[0])}
                    />
                    </Button>
                </div>
                    <span className='errors'>{errors?.image?.message}</span>
                <div className='atributosCA'>
                    <label>Atributos</label>
                </div>

                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Propiedad</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='propiedades'>
                            <TextField
                                id="standard-basic"
                                label="Propiedad"
                                variant="standard"
                                {...register("propiedad_1",)}
                                placeholder='Propiedad'
                            />
                            <span className='errors'>{errors?.propiedad_1?.message}</span>

                            <TextField
                                id="standard-basic"
                                label="Valor"
                                variant="standard"
                                {...register("value_1", {
                                    required: {
                                        value: propiedad1?.length > 0,
                                        message: 'Debes ingresar un valor'
                                    }
                                })}
                                placeholder='Valor'
                            />
                        </div>
                        <span className='errors'>{errors?.value_1?.message}</span>
                    </AccordionDetails>
                </Accordion>
                {propiedad1 && value1 !== '' ?
                    <Accordion
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Propiedad</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='propiedades'>
                                <TextField
                                    id="standard-basic"
                                    label="Propiedad"
                                    variant="standard"
                                    {...register("propiedad_2",)}
                                    placeholder='Propiedad'
                                />
                                <span className='errors'>{errors?.propiedades?.message}</span>

                                <TextField
                                    id="standard-basic"
                                    label="Valor"
                                    variant="standard"
                                    {...register("value_2", {
                                        required: {
                                            value: propiedad2?.length > 0,
                                            message: 'Debes ingresar un valor'
                                        }
                                    })}
                                    placeholder='Valor'
                                />

                            </div>
                            <span className='errors'>{errors?.value_2?.message}</span>
                        </AccordionDetails>
                    </Accordion>
                    :
                    <Accordion disabled>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>Propiedad</Typography>
                        </AccordionSummary>
                    </Accordion>
                }
                {propiedad2 && value2 !== '' ?
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Propiedad</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='propiedades'>
                                <TextField
                                    id="standard-basic"
                                    label="Propiedad"
                                    variant="standard"
                                    {...register("propiedad_3",)}
                                    placeholder='Propiedad'
                                />
                                <span className='errors'>{errors?.propiedades?.message}</span>

                                <TextField
                                    id="standard-basic"
                                    label="Valor"
                                    variant="standard"
                                    {...register("value_3", {
                                        required: {
                                            value: propiedad3?.length > 0,
                                            message: 'Debes ingresar un valor'
                                        }
                                    })}
                                    placeholder='Valor'
                                />
                            </div>
                            <span className='errors'>{errors?.value_3?.message}</span>
                        </AccordionDetails>
                    </Accordion>
                    :
                    <Accordion disabled>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>Propiedad</Typography>
                        </AccordionSummary>
                    </Accordion>
                }
                <Button onClick={handleChange} variant="outlined" type='submit'>Enviar</Button>
            </form>
        </Paper>



    )
}

export default form