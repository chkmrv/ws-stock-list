/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Search = (props: any) => (
    <Autocomplete
        disableClearable
        options={isinList as isinType[]}
        getOptionLabel={(option) => option.title}
        onInputChange={(event: any, newValue: string) => {
            if (newValue.length === 12) props.setValue(newValue);
        }}
        renderOption={(option: any) => (
            <>{option.title} - {option.label}</>
        )}
        renderInput={(params) => (
            <TextField
                {...params}
                label="ISIN Code"
                margin="normal"
                variant="outlined"
                inputProps={{ ...params.inputProps, type: 'search' }}
            />
        )}
    />
)

export default Search

interface isinType {
    title: string;
    label: string;
}

const isinList = [
    { title: 'DE000BASF111', label: 'BASF' },
    { title: 'XS2206793650', label: 'FMS Wertmanagement' },
    { title: 'XS2110068629', label: 'Goldman Sachs International' },
    { title: 'XS2194409368', label: 'Morgan Stanley BV' },
    { title: 'XS2146770248', label: 'Credit Suisse International' },
    { title: 'XS2200436496', label: 'DBS Bank Ltd' },
    { title: 'XS2206751658', label: 'HSBC Bank plc' },
    { title: 'FR0126223082', label: 'Veolia Environnement' },
    { title: 'XS2206990306', label: 'Barclays Bank PLC' },
    { title: 'XS2177402158', label: 'Royal Bank of Canada' },
    { title: 'XS2177784258', label: 'UBS AG' },
    { title: 'FR0126223074', label: 'BNP Paribas' },
    { title: 'XS2163013589', label: 'Citigroup Global' },
    { title: 'XS1875637040', label: 'Deutsche Bank AG' },
    { title: 'XS2197514941', label: 'JP Morgan Structured' },
    { title: 'XS2206935384', label: 'Mizuho Bank Ltd' },
];
