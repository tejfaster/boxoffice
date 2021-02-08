import React from 'react'
import {DetailsWrapper} from './Details.style'

export default function Details({ status, premiered, network }) {
    return (
        <DetailsWrapper>
            <p>
                Status: <span>{status}</span>
            </p>
            <p>
                Premiered {premiered} {network ? `on ${network.name}` : null}
            </p>
        </DetailsWrapper>
    );
};