import BlockContent from '@sanity/block-content-to-react';
import client from '../sanity';

export default function MarkupContent({body}){
    return(
        <BlockContent
        className="prose clamp-3 md:prose-md lg:prose-lg xl:prose-xl"
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
    )
}