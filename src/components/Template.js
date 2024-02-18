import React, { useRef, useEffect } from "react";
import useParallax from "../hooks/useParallax";
import withAppContext from "@/HOCs/withCursor";
import { useRouter } from "next/router";

const Template = (props) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  //   const { onCursor } = props.context;
  // console.log(props)

  const location = useRouter();
  const currentPath = location.pathname;
  const shouldApplyActiveStyle = currentPath !== "/";

  const style = {
    transform: `translateY(${useParallax() / 2}px)`,
    // backgroundColor: `${(useParallax()>200) ? 'rgba(1, 38, 35, .3)' : '#000'}`
  };

  const style2 = {
    transform: `translateY(${-useParallax() / 2}px)`,
    // backgroundColor: `${(useParallax()>200) ? 'rgba(1, 38, 35, .3)' : '#000'}`
  };

  // transform: `${(useParallax()>200) && 'translateY(${useParallax()}px)'}`

  // (useParallax()>200) && style.color = '#30bf97'

  // const refs = [ref1, ref2, ref3, ref4, ref5]
  // const location = useLocation().pathname

  // useEffect(()=> {
  //     function preventScroll(e){
  //         e.preventDefault();
  //         e.stopPropagation();

  //         return false;
  //     }
  //     refs.forEach(function(item){
  //         item.current.addEventListener('wheel', preventScroll);
  //     });
  //     // ref1.current.addEventListener('wheel', preventScroll, {passive: false});
  // }, [])
  return (
    <div className="template">
      <div
        style={shouldApplyActiveStyle ? style2 : {}}
        ref={ref1}
        className="rect rect-1"
      ></div>
      <div
        style={shouldApplyActiveStyle ? style : {}}
        ref={ref2}
        className="rect rect-2"
      ></div>
      {props.children}

      <div
        style={shouldApplyActiveStyle ? style2 : {}}
        ref={ref3}
        className="rect rect-4"
      ></div>
      <div
        style={shouldApplyActiveStyle ? style : {}}
        ref={ref4}
        className="rect rect-5"
      ></div>
      {props.profile && (
        <div ref={ref5} className="profile">
          <img src="/images/profile.svg" alt="" />
        </div>
      )}
    </div>
  );
};

// const TemplateWithRouter = withRouter(Template);
export default withAppContext(Template);
