import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading(){
    return (
        <div>

            <Skeleton width="10rem"/>
            <Skeleton height="20rem" width="20rem"/>

        </div>
    )
}