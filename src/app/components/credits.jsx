const Credits = () => {
  return (
    <div className="py-4 flex text-xs gap-4 flex-col text-justify items-center justify-between">
      <p>
        Linear Regression Calculator Created by Rafhan Mazaya Fathurrahman, This
        tool was developed because im gabut and little bit jengkel because of
        lab report so i want to help students at Telkom University with their
        physics lab assignments on linear regression. Special thanks to the
        Physics Laboratory for their guidance and Muhammad Satrio Wicaksono for
        the inspiration.
      </p>
      <p>
        The linear regression calculator on this site performs statistical
        analysis on data sets entered by users. This allows students to easily
        analyze their lab data and complete their lab reports. I hope i can
        develop this web further more, adding more features and include another
        equation from every modul in physics lab.
      </p>
      <p>
        If you find this tool helpful, I welcome your feedback and suggestions
        for improvements. Please contact me at instagram @Rinyuhhh with any
        comments. I hope this calculator saves you time and helps you learn!
      </p>
      <div className="flex pt-2 items-center gap-4 flex-col w-full md:w-1/2">
        <div>Tech Stack</div>
        <div className="flex w-full justify-around md:w-1/2">
          <p>NextJS</p>
          <p>TailwndCSS</p>
          <p>React-Katex</p>
          <p>DaisyUI</p>
        </div>
      </div>
    </div>
  )
}

export default Credits
