import React, {useEffect} from 'react';
import {Typography} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import Widget6 from './widgets/Widget6';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
//import '../styles/map.css';

function MapApp()
{
    const dispatch = useDispatch();
    const widgets = useSelector(({mapApp}) => mapApp.widgets.data);

    useEffect(() => { dispatch(Actions.getWidgets()); }, [dispatch]);

    if ( !widgets )
    {
        return null;
    }
    return (

        // <style type="text/css">
        //     #fuse-footer{{display: none}}
        // </style>

        
        <div className="w-full container-map" >

            <div class="searchMap flex flex-wrap ">
                <div class="sm:w-2/3 md:w-2/3 px-8">
                    <div class="MuiPaper-root MuiPaper-elevation1 flex p-4 items-center w-full  py-4 rounded-4 MuiPaper-rounded ">
                        
                        <span class="material-icons MuiIcon-root mr-8 MuiIcon-colorAction" aria-hidden="true">search</span>
                        <div class="MuiInputBase-root MuiInput-root flex flex-1 MuiInputBase-fullWidth MuiInput-fullWidth">
                            <input class="MuiInputBase-input MuiInput-input" placeholder="Buscar" type="text" aria-label="Search" value="" />
                        </div>

                    </div>
                </div>
                
                <div class="sm:w-1/3 md:w-1/3 px-8">
                    <div class="MuiPaper-root MuiPaper-elevation1 flex p-4 items-center w-full py-4 rounded-4 MuiPaper-rounded ">
                        <select aria-label="rows per page" class="form-control">
                            <option value="5">Categorias</option>
                            <option value="10">10 rows</option>
                            <option value="20">20 rows</option>
                            <option value="25">25 rows</option>
                            <option value="50">50 rows</option>
                            <option value="100">100 rows</option>
                        </select>
                    </div>
                </div>

            </div>

            <div class="graficMap">
                <div class="flex flex-wrap h100">
                    <div class="widget flex w-full sm:w-1/3 md:w-1/3 p-12" >
                       <div class="graficMap-box">
                            <div class="flex items-center justify-between pr-4 pl-16 pt-4">
                                <p class="MuiTypography-root text-16 MuiTypography-body1">Gráfico 1</p>
                                <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="more">
                                    <span class="MuiIconButton-label">
                                        <span class="material-icons MuiIcon-root" aria-hidden="true">more_vert</span>
                                    </span>
                                    <span class="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                       </div>
                    </div>

                    <div class="widget flex w-full sm:w-1/3 md:w-1/3 p-12" >
                        <div class="graficMap-box">
                            <div class="flex items-center justify-between pr-4 pl-16 pt-4">
                                <p class="MuiTypography-root text-16 MuiTypography-body1">Gráfico 2</p>
                                <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="more">
                                    <span class="MuiIconButton-label">
                                        <span class="material-icons MuiIcon-root" aria-hidden="true">more_vert</span>
                                    </span>
                                    <span class="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="widget flex w-full sm:w-1/3 md:w-1/3 p-12" >
                        <div class="graficMap-box">
                            <div class="flex items-center justify-between pr-4 pl-16 pt-4">
                                <p class="MuiTypography-root text-16 MuiTypography-body1">Gráfico 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FuseAnimate animation="transition.slideUpIn" delay={200}>
            <div className="widget w-full">
                <Widget6 data={widgets.widget6}/>
            </div>
            </FuseAnimate>
        </div>
    )
}

export default withReducer('mapApp', reducer)(MapApp);
