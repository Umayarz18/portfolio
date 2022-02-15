// Special component that renders the src for a given `_type: "image"` object
import { Image } from 'sanity-plugin-asset-source-ogimage'
import React from 'react'

//Manually Added my profile pic 
const profilePic = {
  _type: 'image',
  asset: {
    _type: 'reference',
    _ref: 'image-eab0d60f3242ce5e9f41943dbd73366471d21a2e-618x618-png',
  },
}

export const blogPostLayout = {
  name: 'blogPost',
  title: 'Blog post (Twitter, Linkedin, Facebook)',
  // Start defining the form editors will fill to change the final image
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      description: '❓ Optional',
      type: 'string',
    },
    {
      name: 'date',
      // ideally, it'd be a date, but that input isn't implemented yet
      type: 'string',
    },
    {
      name: 'projectImage',
      title: "Project Image",
      type: 'mainImage',
    },
    {
      name: 'authorName',
      type: 'string',
    },
  ],

  prepare: (document) => {
    return {
      title: document.seoContent.title,
      subtitle: document.seoContent.subtitle || document.seoContent.excerpt,
      date: new Date(
        document._createdAt ? document._createdAt : Date.now(),
      ).toLocaleDateString('en'),
      projectImage: document.projectImage || document.mainImage,
    }
  },
  dimensions: {
    width: 1200,
    height: 630,
  },
  component: ({ title, subtitle, date, projectImage }) => (
    <div className='ogimage-body' style={{
      background: '#111827',
      background: 'linear-gradient(141.59deg, #111827 22.11%, #292A2E 86.54%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: '127px 90px',
        height: '375px',
        width: '1022px'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexGrow: 1,
        }}>
          <h1 style={{
            color: 'white',
            fontSize: '64px',
            fontStyle: 'normal',
            fontWeight: 700,
            letterSpacing: '0em',
            margin: 0,
            textAlign: 'left'
          }}>{title || 'Please insert a title'}</h1>
          {subtitle && <h2
            style={{
              color: '#9A9A9A',
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 700,
              letterSpacing: '0em',
              textAlign: 'left'
            }} > {subtitle}</h2>}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '89px',
            width: '445px'
          }}>
            <div style={{ borderRadius: '100%' }}>
              <Image image={profilePic} width={89} height={89} />
            </div>
            <div style={{ marginLeft: '10px' }}>
              <h3 style={{
                color: '#CAC9CE',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 600,
                letterSpacing: '0em',
                margin: 0,
                textAlign: 'left'
              }}>Roewyn Umayam</h3>
              <p style={{
                color: '#9A9A9A',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 500,
                letterSpacing: '0em',
                margin: 0,
                textAlign: 'left'
              }}>Frontend Developer</p>
            </div>
          </div>
        </div>

        <Image image={projectImage} width={375} height={375} />
      </div>

    </div >
  ),
}