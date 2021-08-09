import BlockContent from '@sanity/block-content-to-react';
import client from '../sanity';

export default function MarkupContent({body}){
    return(
        <BlockContent
        className="prose clamp-3 md:prose-lg lg:prose-xl xl:prose-2xl"
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
    )
}